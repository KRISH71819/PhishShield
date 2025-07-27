import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { url } = await req.json();
    const apikey = process.env.VIRUSTOTAL_API_KEY;
    // const apiurl = `https://webrisk.googleapis.com/v1/uris:search?key=${apikey}&threatTypes=MALWARE&threatTypes=SOCIAL_ENGINEERING&threatTypes=UNWANTED_SOFTWARE&uri=${encodeURIComponent(url)}`;

    if (!apikey) {
      throw new Error("VirusTotal API key is not configured.");
    }

    const encodedUrl = Buffer.from(url).toString("base64").replace(/=/g, "");
    const apiurl = `https://www.virustotal.com/api/v3/urls/${encodedUrl}`;

    const res = await fetch(apiurl, {
      headers: {
        "x-apikey": apikey,
      },
    });

    if (res.status === 404) {
      return NextResponse.json({
        isSafe: true,
        message: "This URL appears to be safe.",
        data: null,
      });
    }

    if (!res.ok) {
      throw new Error(`VirusTotal API responded with status: ${res.status}`);
    }

    const data = await res.json();

    if (!data.data || !data.data.attributes || !data.data.attributes.last_analysis_stats) {
       throw new Error("Unexpected response structure from VirusTotal.");
    }

    const stats = data.data.attributes.last_analysis_stats;

    const ismalicious = stats.malicious > 0 || stats.suspicious > 0;

    return NextResponse.json({
      isSafe: !ismalicious,
      message: ismalicious
        ? "This URL is considered malicious."
        : "This URL appears to be safe.",
      data: stats,
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

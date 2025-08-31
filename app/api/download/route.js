import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const { url } = await request.json();
    
    if (!url || !url.includes('tiktok.com')) {
      return NextResponse.json({ error: 'Invalid TikTok URL' }, { status: 400 });
    }

    // Extract video ID from TikTok URL
    const videoId = extractVideoId(url);
    if (!videoId) {
      return NextResponse.json({ error: 'Could not extract video ID' }, { status: 400 });
    }

    // Get video info using TikTok API
    const videoData = await getTikTokVideoData(videoId);
    
    if (!videoData) {
      return NextResponse.json({ error: 'Video not found or private' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        title: videoData.title,
        author: videoData.author,
        qualities: videoData.qualities,
        thumbnail: videoData.thumbnail,
        duration: videoData.duration
      }
    });

  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json({ error: 'Failed to process video' }, { status: 500 });
  }
}

function extractVideoId(url) {
  try {
    // Handle different TikTok URL formats
    const patterns = [
      /tiktok\.com\/@[\w.-]+\/video\/(\d+)/,
      /tiktok\.com\/v\/(\d+)/,
      /vm\.tiktok\.com\/(\w+)/,
      /tiktok\.com\/t\/(\w+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  } catch {
    return null;
  }
}

async function getTikTokVideoData(videoId) {
  try {
    // Using a TikTok scraping service
    const apiUrl = `https://tikwm.com/api/?url=https://www.tiktok.com/@user/video/${videoId}`;
    const response = await axios.get(apiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 10000
    });

    if (response.data && response.data.code === 0) {
      const data = response.data.data;
      return {
        title: data.title || 'TikTok Video',
        author: data.author?.nickname || 'Unknown',
        qualities: [
          { label: 'HD (720p)', url: data.hdplay || data.play, size: 'High Quality' },
          { label: 'SD (480p)', url: data.play, size: 'Standard Quality' },
          { label: 'Audio Only', url: data.music, size: 'MP3 Format' }
        ].filter(q => q.url),
        thumbnail: data.cover,
        duration: data.duration
      };
    }
    return null;
  } catch (error) {
    console.error('API Error:', error.message);
    return null;
  }
}
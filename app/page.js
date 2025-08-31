"use client";

import { useState } from "react";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [selectedQuality, setSelectedQuality] = useState(0);

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Please enter a TikTok URL");
      return;
    }

    setLoading(true);
    setError("");
    setVideoData(null);

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const result = await response.json();

      if (result.success) {
        setVideoData(result.data);
      } else {
        setError(result.error || "Failed to download video");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadVideo = async (downloadUrl, title, quality) => {
    setDownloading(true);
    setDownloadProgress(0);
    
    try {
      // Simulate download progress
      const progressInterval = setInterval(() => {
        setDownloadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // Fetch the video file
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      
      // Complete progress
      setDownloadProgress(100);
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title}_${quality}.${quality.includes('Audio') ? 'mp3' : 'mp4'}`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setTimeout(() => {
        setDownloading(false);
        setDownloadProgress(0);
      }, 1000);
    } catch (error) {
      setError('Download failed. Please try again.');
      setDownloading(false);
      setDownloadProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 mb-8">{t("subtitle")}</p>

          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4 mb-6">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={t("placeholder")}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleDownload}
                disabled={loading}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
              >
                {loading ? "Processing..." : t("download")}
              </button>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            {videoData && (
              <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                <div className="flex gap-4">
                  <img
                    src={videoData.thumbnail}
                    alt="Video thumbnail"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      {videoData.title}
                    </h3>
                    <p className="text-gray-600 mb-2">By: {videoData.author}</p>
                    <p className="text-gray-500 text-sm mb-4">
                      Duration: {videoData.duration}s
                    </p>
                    
                    {/* Quality Selector */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Quality:
                      </label>
                      <select
                        value={selectedQuality}
                        onChange={(e) => setSelectedQuality(parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      >
                        {videoData.qualities?.map((quality, index) => (
                          <option key={index} value={index}>
                            {quality.label} - {quality.size}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="relative">
                      <button
                        onClick={() =>
                          downloadVideo(
                            videoData.qualities[selectedQuality]?.url,
                            videoData.title,
                            videoData.qualities[selectedQuality]?.label
                          )
                        }
                        disabled={downloading || !videoData.qualities?.[selectedQuality]}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 w-full"
                      >
                        {downloading ? 'Downloading...' : `Download ${videoData.qualities?.[selectedQuality]?.label || 'Video'}`}
                      </button>
                      
                      {downloading && (
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                              style={{ width: `${downloadProgress}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1 text-center">
                            {downloadProgress}% Complete
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

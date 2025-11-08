export default function StatsCard({ data }) {
  if (!data) return null;

  const totalStats = data.statistics.total;
  const achievements = data.achievements.display || [];

  function eloToRank(elo) {
    if (elo >= 0 && elo <= 399) return "Coal I";
    if (elo >= 400 && elo <= 499) return "Coal II";
    if (elo >= 500 && elo <= 599) return "Coal III";
    
    if (elo >= 600 && elo <= 699) return "Silver I";
    if (elo >= 700 && elo <= 799) return "Silver II";
    if (elo >= 800 && elo <= 899) return "Silver III";
    
    if (elo >= 900 && elo <= 999) return "Gold I";
    if (elo >= 1000 && elo <= 1099) return "Gold II";
    if (elo >= 1100 && elo <= 1199) return "Gold III";
    
    if (elo >= 1200 && elo <= 1299) return "Emerald I";
    if (elo >= 1300 && elo <= 1399) return "Emerald II";
    if (elo >= 1400 && elo <= 1499) return "Emerald III";
    
    if (elo >= 1500 && elo <= 1649) return "Diamond I";
    if (elo >= 1650 && elo <= 1799) return "Diamond II";
    if (elo >= 1800 && elo <= 1999) return "Diamond III";
    
    if (elo >= 2000) return "Netherite";

    return "Unranked";
  }

  const formatNumber = (num) => (num !== null ? num.toLocaleString() : "N/A");

  function formatTime(ms) {
    if (ms === null || ms === undefined) return "N/A";

    let totalSeconds = Math.floor(ms / 1000);

    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const parts = [];

    if (days > 0) parts.push(days);
    if (days > 0 || hours > 0) parts.push(hours); 
    if (days > 0 || hours > 0 || minutes > 0) parts.push(minutes); 
    parts.push(seconds);

    return parts.join(":");
    }


  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-800 text-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          {/* Head */}
          <img
            src={`https://mc-heads.net/avatar/${data.nickname || ""}`}
            alt="Head"
            className="w-16 h-16 rounded"
          />
          <div className="flex flex-col">
            {/* Name and Flag */}
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-2xl font-bold">{data.nickname || "..."}</h1>
              <div className="flex items-center gap-2">
              <img
                  src={`https://flagsapi.com/${data.country.toUpperCase()}/flat/64.png`}
                  alt={`Flag of ${data.country}`}
                  className="w-6 h-6"
              />
              </div>
            </div>

            {/* #X, Rank, ELO */}
            <div className="flex flex-row gap-2">
              <div>#{data.eloRank}</div>
              <div>{eloToRank(data.eloRank)}</div>
              <div>({data.eloRate} elo)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-700 p-2 rounded">{data.pp || ""}</div>
          <div className="bg-gray-700 p-2 rounded">AVG</div>
          <div className="bg-gray-700 p-2 rounded">{data.wr || ""}</div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-700 p-2 rounded">{data.peak || ""}</div>
          <div className="bg-gray-700 p-2 rounded">Hit Rate</div>
          <div className="bg-gray-700 p-2 rounded">{data.playedMatches || ""}</div>
        </div>
      </div>
    </div>
  );
}

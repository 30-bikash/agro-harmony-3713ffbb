
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', health: 85 },
  { name: 'Feb', health: 82 },
  { name: 'Mar', health: 88 },
  { name: 'Apr', health: 90 },
  { name: 'May', health: 89 },
  { name: 'Jun', health: 86 },
  { name: 'Jul', health: 91 },
];

const CropHealthChart = () => {
  return (
    <div className="chart-container h-80">
      <h3 className="text-base font-medium mb-4">Crop Health Trends</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5AAB61" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#5AAB61" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            domain={[60, 100]}
            tickFormatter={(tick) => `${tick}%`}
          />
          <Tooltip
            formatter={(value) => [`${value}%`, 'Health Index']}
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '0.375rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            }}
          />
          <Area 
            type="monotone" 
            dataKey="health" 
            stroke="#2D5F3F" 
            fillOpacity={1} 
            fill="url(#colorHealth)" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CropHealthChart;

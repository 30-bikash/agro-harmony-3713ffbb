
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Rice', current: 35, average: 30 },
  { name: 'Tea', current: 120, average: 110 },
  { name: 'Jute', current: 45, average: 48 },
  { name: 'Mustard', current: 85, average: 75 },
  { name: 'Vegetables', current: 55, average: 52 },
];

const MarketPriceChart = () => {
  return (
    <div className="chart-container h-80">
      <h3 className="text-base font-medium mb-4">Market Prices (₹/kg)</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} vertical={false} />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={(tick) => `₹${tick}`}
          />
          <Tooltip
            formatter={(value) => [`₹${value}`, 'Price per kg']}
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '0.375rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            }}
          />
          <Bar dataKey="average" fill="#D3B88C" name="Market Average" radius={[4, 4, 0, 0]} />
          <Bar dataKey="current" fill="#3E7CB1" name="Current Price" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketPriceChart;

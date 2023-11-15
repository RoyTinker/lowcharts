// Define basic types for the chart options
type ChartType = "line"; // Extend with more types as needed ('bar', 'pie', etc.)

interface Title {
  text: string;
  align?: "left" | "right" | "center"; // Add more properties as needed
}

interface Subtitle {
  text: string;
  align?: "left" | "right" | "center"; // Similar to Title
}

interface Axis {
  title: {
    text: string;
  };
  // Add more properties as needed (like categories, labels, etc.)
}

interface SeriesData {
  name: string;
  data: number[]; // Array of data points (extend for more complex structures)
}

interface Series {
  type: ChartType;
  series: SeriesData[];
}

interface ChartOptions {
  title: Title;
  subtitle?: Subtitle;
  yAxis: Axis;
  xAxis: Axis;
  series: Series[];
  // Add more properties as needed (like legend, plotOptions, etc.)
}

// Entry point function
function chart(_container: string, _options: ChartOptions): string {
  // Initial implementation logic
  // Here you'll translate the options into gnuplot commands

  // Placeholder return - this would eventually be the gnuplot script
  return "gnuplot script generated here";
}

// Example usage
const myChartOptions: ChartOptions = {
  title: { text: "My Chart Title", align: "left" },
  yAxis: { title: { text: "Y Axis" } },
  xAxis: { title: { text: "X Axis" } },
  series: [
    {
      type: "line",
      series: [{ name: "Series 1", data: [1, 2, 3, 4] }],
    },
  ],
};

const gnuplotScript = chart("myChartContainer", myChartOptions);
console.log(gnuplotScript);

export default chart;

import {
  BarController,
  BarControllerChartOptions,
  BarControllerDatasetOptions,
  CartesianScaleTypeRegistry,
  Chart,
  ChartComponent
} from 'chart.js';

declare module 'chart.js' {
  interface FinancialDataPoint {
    x: number,
    o: number,
    h: number,
    l: number,
    c: number
  }

  interface FinancialParsedData {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _custom?: any
  }

  type CandlestickControllerDatasetOptions = BarControllerDatasetOptions & {
    borderColors: {
      up: string,
      down: string,
      unchanged: string
    };
    backgroundColors: {
      up: string,
      down: string,
      unchanged: string
    };
  }

  interface ChartTypeRegistry {
    candlestick: {
      chartOptions: BarControllerChartOptions;
      datasetOptions: CandlestickControllerDatasetOptions;
      defaultDataPoint: FinancialDataPoint;
      metaExtensions: Record<string, never>;
      parsedDataType: FinancialParsedData;
      scales: keyof CartesianScaleTypeRegistry;
    };
    ohlc: {
      chartOptions: BarControllerChartOptions;
      datasetOptions: BarControllerDatasetOptions;
      defaultDataPoint: FinancialDataPoint;
      metaExtensions: Record<string, never>;
      parsedDataType: FinancialParsedData;
      scales: keyof CartesianScaleTypeRegistry;
    }
  }
}

declare const CandlestickController: ChartComponent & {
  prototype: BarController;
  new(chart: Chart, datasetIndex: number): BarController;
};
declare const OhlcController: ChartComponent & {
  prototype: BarController;
  new(chart: Chart, datasetIndex: number): BarController;
};

declare const CandlestickElement: Element;
declare const OhlcElement: Element;


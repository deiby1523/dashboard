import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BarSeries,  DateTime, Legend} from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const BarChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Inflation Rate in Percentaje"/>
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={ { border: {width:0 } } }
          tooltip={ { enable:true } }
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}>

          <Inject services={ [BarSeries, DateTime, Legend]}/>

          <SeriesCollectionDirective>
            {barCustomSeries.map((item,index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
          
        </ChartComponent>
      </div>
    </div>
  )
}

export default BarChart
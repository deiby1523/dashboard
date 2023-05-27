import React from 'react';
// Syncfusion
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject } from '@syncfusion/ej2-react-grids';
// Data
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { Toolbar } from '@syncfusion/ej2-react-richtexteditor';

const Employees = () => {
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees"/>
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={toolbarOptions}
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index}{...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={ [Page, Search]}/>
      </GridComponent>
    </div>
  )
}

export default Employees
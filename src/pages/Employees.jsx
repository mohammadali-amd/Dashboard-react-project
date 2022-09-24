import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Page, Inject } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
   const toolbarOptions = ['Search']
   const editing = { allowDeleting: true, allowEditting: true }

   return (
      <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
         <Header category='Page' title='Employees' />
         <GridComponent
            dataSource={employeesData}
            width='auto'
            allowSorting
            allowPaging
            editSettings={editing}
            toolbar={toolbarOptions}
            pageSettings={{ pageCount: 5 }}
         >
            <ColumnsDirective>
               {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
            <Inject services={[Search, Page]} />
         </GridComponent>
      </div>
   )
}

export default Employees
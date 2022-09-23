import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Selection, Toolbar, Filter, Page, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
   const selectionsettings = { persistSelection: true }
   const toolbarOptions = ['Delete']
   const editing = { allowDeleting: true, allowEditting: true }

   return (
      <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
         <Header category='Page' title='Customers' />
         <GridComponent
            dataSource={customersData}
            enableHover={false}
            allowSorting
            allowPaging
            editSettings={editing}
            toolbar={toolbarOptions}
            selectionSettings={selectionsettings}
            pageSettings={{ pageCount: 5 }}
         >
            <ColumnsDirective>
               {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
            <Inject services={[Sort, Selection, Toolbar, Filter, Page, Edit]} />
         </GridComponent>
      </div>
   )
}

export default Customers
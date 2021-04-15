import React ,{useMemo} from 'react'
import {useTable} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json'
import {Columns} from './columns';
import './table.css';

const BasicTable = () => {

	const columns=useMemo(() => Columns,[]);
	const data=useMemo(() => MOCK_DATA,[])

	const tableInstance=useTable({
		columns,
		data
	})
	const {getTableProps,getTableBodyProps,headerGroups,footerGroups,rows,prepareRow}=tableInstance

  return (
		<table className="table table-border table-striped table-hover" {...getTableProps()}>
		  <thead>
	    	{headerGroups.map((headerGroup)=>(
	    		<tr {...headerGroup.getHeaderGroupProps()}>
	    		{headerGroup.headers.map(column=>(
	    			<th {...column.getHeaderProps()} key={Math.random(0,100000)}>{column.render('Header')}</th>
	    		))}
	    		</tr>
	    	))}
	    </thead>
			<tbody {...getTableBodyProps()}>
	    	{rows.map((row)=>{
					prepareRow(row);
					return (
						<tr {...row.getRowProps} key={Math.random(0,100000)}>
							{row.cells.map(cell=>{
								return <td {...cell.getCellProps()} key={Math.random(0,100000)}>{cell.render('Cell')}</td>
							})}
						</tr>
					)
				})}
	    </tbody>
			<tfoot>
				{footerGroups.map(footerGroup=>(
					<tr {...footerGroup.getFooterGroupProps()} key={Math.random(0,100000)}>
						{footerGroup.headers.map(column=>(
							<td {...column.getFooterProps()} key={Math.random(0,100000)}>
								{column.render('Footer')}
							</td>
						))}
					</tr>
				))}
			</tfoot>
		</table>
  )
};

export default BasicTable

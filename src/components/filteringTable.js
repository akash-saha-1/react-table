import React ,{useMemo,Fragment} from 'react'
import {useTable,useGlobalFilter,useFilters} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json'
import {Columns} from './columns';
import {GlobalFilter} from './globalFilter';
import {ColumnFilter} from './columnFilter'
import './table.css';

const FilteringTable = () => {

	const columns=useMemo(() => Columns,[]);
	const data=useMemo(() => MOCK_DATA,[])

	const defaultColumn=useMemo(()=>{return {Filter:ColumnFilter}},[])

	const tableInstance=useTable({
		columns,
		data,
		defaultColumn
	},useFilters,useGlobalFilter)
	const {getTableProps,getTableBodyProps,headerGroups,footerGroups,rows,prepareRow,state,setGlobalFilter}=tableInstance
	const {globalFilter}=state

  return (
		<Fragment>
		<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
			<table className="table table-border table-striped table-hover" {...getTableProps()}>
			  <thead>
		    	{headerGroups.map((headerGroup)=>(
		    		<tr {...headerGroup.getHeaderGroupProps()}>
		    		{headerGroup.headers.map(column=>(
		    			<th {...column.getHeaderProps()} key={Math.random(0,100000)}>
								{column.render('Header')}
								<div>{column.canFilter?column.render('Filter'):null}</div>
							</th>
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
		</Fragment>
  )
};

export default FilteringTable

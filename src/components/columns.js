import {format} from 'date-fns';

export const Columns = [{
	Header: 'Id',
	Footer: 'Id',
	accessor: 'id',
	disableFilters: true
}, {
	Header: 'First Name',
	Footer: 'First Name',
	accessor: 'first_name'
}, {
	Header: 'Last Name',
	Footer: 'Last Name',
	accessor: 'last_name'
}, {
	Header: 'Email',
	Footer: 'Email',
	accessor: 'email'
}, {
	Header: 'Date Of Birth',
	Footer: 'Date Of Birth',
	accessor: 'date_of_birth',
	Cell: ({ value }) => {return format(new Date(value), 'dd/MM/yyyy')}
}, {
	Header: 'Country',
	Footer: 'Country',
	accessor: 'country'
}, {
	Header: 'Phone',
	Footer: 'Phone',
	accessor: 'phone'
}]

export const GroupedColumns=[{
		Header: 'Id',
		Footer: 'Id',
		accessor: 'id'
	},{
		Header: 'Name',
		Footer: 'Name',
		id: 'full_name',
		columns:[
			{
				Header: 'First Name',
				Footer: 'First Name',
				accessor: 'first_name'
			}, {
				Header: 'Last Name',
				Footer: 'Last Name',
				accessor: 'last_name'
			},
		],
	},{
		Header: 'Info',
		Footer: 'Info',
		id: 'info',
		columns:[
			{
				Header: 'Email',
				Footer: 'Email',
				accessor: 'email'
			}, {
				Header: 'Date Of Birth',
				Footer: 'Date Of Birth',
				accessor: 'date_of_birth'
			}, {
				Header: 'Country',
				Footer: 'Country',
				accessor: 'country'
			}, {
				Header: 'Phone',
				Footer: 'Phone',
				accessor: 'phone'
			}
		]
	}
];

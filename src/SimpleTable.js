import React,{ Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class SimpleTable extends Component{
    render()
    {
        return(
            <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell numeric>Calories</TableCell>
                        <TableCell numeric>Fat (g)</TableCell>
                        <TableCell numeric>Carbs (g)</TableCell>
                        <TableCell numeric>Protein (g)</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </Paper>
        );
    }

}
export default SimpleTable;
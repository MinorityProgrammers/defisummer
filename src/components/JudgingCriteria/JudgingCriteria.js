import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core/';
import './table.css'

import {data} from '../../Data/DummyData'

const useStyles = makeStyles({
  container:{
    margin: '15vh 8%',
    },
    tableCont:{
       margin: '5vh'
    }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <Typography component='h2' variant='h5' style={{fontWeight: 700}}>
            {'<JUDGING_CRITERIA/>'}
        </Typography>
        <div className={classes.tableCont}>
            <table className={classes.table}>
                <tr style={{backgroundColor: '#ccc'}}>
                    <th>Technical Complexity</th>
                    <th>Practically</th>
                    <th>Presentation of Product</th>
                </tr>
                <tbody>
            {
                data.tableData.map(content => (
            <tr key={content.id}>
                    <td>
                        <Typography variant='body1'>{content.row1Title}</Typography>
                        <Typography variant='body2'>{content.row1Desc}</Typography>
                        <Typography variant='body2' style={{margin: '1vh 0'}}>{content.row1Desc2}</Typography>
                    </td>
                    <td>
                        <Typography variant='body1'>{content.row2Title}</Typography>
                        <Typography variant='body2'>{content.row2Desc}</Typography>
                    </td>
                    <td>
                        <Typography variant='body1'>{content.row3Title}</Typography>
                        <Typography variant='body2'>{content.row3Desc}</Typography>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}

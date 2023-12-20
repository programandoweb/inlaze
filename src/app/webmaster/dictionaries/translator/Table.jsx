'use client'
import { Card, Grid, CardHeader, Typography } from "@mui/material";
import useFormData from "@/hooks/useFormData";
//import { useEffect, useState } from "react";
import Image from "next/image";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from "next/link";
import PaginationRounded from "../../../../../components/Table/Pagination";
import LinearWithValueLabel from "../../../../../components/Loading/LinearWithLabel";

const Tables = ({data}) => {
  const backend                   =   useFormData(false,true);
  
  return (
            <Grid container spacing={2}>
              <Grid item xs={12} align="right" sx={{mb:2}}>
                <PaginationRounded  paginator={backend&&backend.paginator}/>
              </Grid>
              {
                backend.loading&&(
                  <LinearWithValueLabel />
                )
              }
              {
                backend&&backend.dataSet===null&&!backend.loading&&(
                  <LinearWithValueLabel/>                    
                )
              }
              {
                
                backend&&backend.dataSet&&backend.dataSet.length>0&&(
                  backend.dataSet.map((row,key)=>{
                    let sub = {}                    
                    if (row.translations) {
                      sub = JSON.parse(row.translations);
                    }
                    return  <Grid item xs={12} sm={6} md={3} xl={2} key={key}>
                              <Card>
                                <CardHeader
                                  action={
                                    <IconButton component={Link} href={"open/"+(row.id&&row.id.toString())} aria-label="settings">
                                      <MoreVertIcon />
                                    </IconButton>
                                  }
                                  title={<Typography variant="title">{sub&&sub.lang} ID: <b>{row.id}</b></Typography>}
                                  subheader={<Typography variant="subheader"> 
                                    Key: <b>{row.key}</b> - Label: <b>{sub&&sub.label}</b> 
                                    {
                                      console.log(sub)
                                    }
                                  </Typography>}
                                />                                                                
                              </Card>
                            </Grid>
                  })
                )
              }

            </Grid>
  );
};

export default Tables;


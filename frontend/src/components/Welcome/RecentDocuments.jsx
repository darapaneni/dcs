import React from 'react';
import {Box, Typography, Paper, Grid2} from '@mui/material';

// function RecentDocuments({ searchQuery, filter }) { //TODO : Global search for recent documents- yet to impelempent
const RecentDocuments=()=> {
    const documents = [
        {title: 'Project Proposal', date: '2024-10-04'},
        {title: 'Marketing Plan', date: '2024-10-03'},
        {title: 'Budget Report', date: '2024-10-01'}
    ];

    //TODO : Global search for recent documents- yet to impelempent
    // const filteredDocs = documents.filter((doc) => {
    //     const matchesSearch = doc.title.toLowerCase().includes(searchQuery);
    //     const matchesFilter = (filter === 'all') ||
    //         (filter === 'last7Days' && new Date(doc.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
    //         (filter === 'last30Days' && new Date(doc.date) >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
    //
    //     return matchesSearch && matchesFilter;
    // });

    return (
        <Box sx={{py: 5, textAlign: 'center'}}>
            <Typography variant="h5" color="primary" gutterBottom>
                Recent Documents
            </Typography>
            <Grid2 container spacing={3} justifyContent="center">
                {documents.map((doc, index) => (
                    <Grid2   xs={12} sm={4} key={index}>
                        <Paper sx={{p: 2}}>
                            <Typography variant="h6">{doc?.title}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Last edited: {doc?.date}
                            </Typography>
                        </Paper>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

export default RecentDocuments;

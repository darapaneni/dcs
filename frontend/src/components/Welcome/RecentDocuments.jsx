/**
 * @file RecentDocuments.js
 * @description This file contains the RecentDocuments component, which displays a list of recently edited documents.
 * The component presents the documents in a grid layout using Material-UI components.
 */

import React from 'react';
import {Box, Typography, Paper, Grid2} from '@mui/material';

/**
 * RecentDocuments component for displaying a list of recently edited documents.
 * 
 * @returns {JSX.Element} A Box component containing a title and a grid of document entries,
 * each displaying the title and the last edited date of the document.
 * 
 * @example
 * <RecentDocuments />
 * 
 * @todo Implement global search functionality for filtering recent documents.
 */
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

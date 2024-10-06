import React from 'react';
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define your validation schema using Zod
const schema = z.object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string()
        .min(6, 'New password must be at least 6 characters') ,
    confirmPassword: z.string()
        .min(6, 'Confirm password must be at least 6 characters')
        .refine((val, ctx) => {
            // if (val !== ctx.parent.newPassword) {
            //     ctx.addIssue({
            //         code: z.ZodIssueCode.custom,
            //         message: 'Passwords do not match',
            //     });
            //     return false;
            // }
            return true;
        }),
});

const ChangePassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = () => {
        // Handle password change logic here
        console.log('Password changed:');
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" gutterBottom>
                Change Password
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Current Password"
                    type="password"
                    variant="outlined"
                    {...register('currentPassword')}
                    error={!!errors.currentPassword}
                    helperText={errors.currentPassword?.message}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="New Password"
                    type="password"
                    variant="outlined"
                    {...register('newPassword')}
                    error={!!errors.newPassword}
                    helperText={errors.newPassword?.message}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Confirm New Password"
                    type="password"
                    variant="outlined"
                    {...register('confirmPassword')}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2 }}
                >
                    Change Password
                </Button>
            </Box>
        </Container>
    );
};

export default ChangePassword;

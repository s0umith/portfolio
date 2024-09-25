import { z } from 'zod';

export const createLetsConnectForm = z.object({ 
    email: z.string().email().min(8,{
        message : 'provide a valid email.'
    }),
    name: z.string().min(2, {
        message: 'first name must be atleast 2 characters.'
    }),
    message: z.string().min(20, {
        message: 'Message must be at least 20 characters'
    }), 
});
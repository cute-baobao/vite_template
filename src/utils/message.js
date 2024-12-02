import { useToast } from '@/components/ui/toast/use-toast'
const {toast} = useToast()
export const success = (msg) => {
    toast({
        description:msg,
        variant: 'success',
    })
}

export const warning = (msg) => {
    toast({
        description:msg,
        variant: 'warn',
    })
}

export const info = (msg) => {
    toast({
        description:msg,
        variant: 'info',
    })
}
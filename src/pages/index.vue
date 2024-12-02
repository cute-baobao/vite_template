<script setup>
import { Button } from '../components/ui/button';
import { warning } from "@/utils/message"
</script>
<template>
    <div class=" bg-slate-200 h-screen w-full flex items-center justify-center flex-col">
        <span class=" text-xl font-semibold">包的vite模板</span>
        <Button @click="warning('点击了按钮')">按钮</Button>
    </div>
</template>
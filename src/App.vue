<script setup>
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toast'
</script>
<template>
  <Toaster />
  <div>
    <router-view>
    </router-view>
  </div>
</template>

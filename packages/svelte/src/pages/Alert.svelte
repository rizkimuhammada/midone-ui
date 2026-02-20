<script lang="ts">
  import { AlertRoot, AlertTitle, AlertDescription, AlertCloseTrigger } from "@/components/ui/alert";
</script>

<div class="flex flex-col gap-4 max-w-2xl">
  <AlertRoot variant="primary">
    <AlertTitle>Primary Alert</AlertTitle>
    <AlertDescription>This is a primary alert with a title and description.</AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
  <AlertRoot variant="success">
    <AlertTitle>Success</AlertTitle>
    <AlertDescription>Your action was completed successfully.</AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
  <AlertRoot variant="danger">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Something went wrong. Please try again.</AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
  <AlertRoot variant="warning">
    <AlertTitle>Warning</AlertTitle>
    <AlertDescription>Please review the changes before continuing.</AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
  <AlertRoot variant="pending">
    <AlertTitle>Pending</AlertTitle>
    <AlertDescription>Your request is being processed.</AlertDescription>
  </AlertRoot>
  <AlertRoot look="outline" variant="primary">
    <AlertTitle>Outline Primary</AlertTitle>
    <AlertDescription>This is an outline alert variant.</AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
</div>

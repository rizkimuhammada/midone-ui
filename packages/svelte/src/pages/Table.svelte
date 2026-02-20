<script lang="ts">
  import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
</script>

<div class="max-w-3xl">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Admin</TableCell>
        <TableCell>Active</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane Smith</TableCell>
        <TableCell>jane@example.com</TableCell>
        <TableCell>Editor</TableCell>
        <TableCell>Active</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Bob Johnson</TableCell>
        <TableCell>bob@example.com</TableCell>
        <TableCell>Viewer</TableCell>
        <TableCell>Inactive</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>

import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetStaff =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_user";

export const tableStaff = `
<tr>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#EMAIL#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#PASSWORD#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#ROLE#</span>
</td>
</tr>
`;

export function responseData(results) {
  console.log("Response data:", results);
  results.forEach(isiRow);
}

export function isiRow(value) {
  const staff = tableStaff
    .replace("#EMAIL#", value.user.email)
    .replace("#PASSWORD#", value.user.password)
    .replace("#ROLE#", value.user.role);
  addInner("tableStaff", staff);
}

import { addInner } from "https://jscroot.github.io/element/croot.js";
export const URLGetStaff =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_user";

export const tableStaff = `
<tr>
<td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <p class="mb-0 text-xs font-semibold leading-tight">#FIRSTNAME#</p>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#LASTNAME#</span>
</td>
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
  console.log(results);
  results.forEach(isiRow);
}

export function isiRow(value) {
  const staff = tableStaff
    .replace("#FIRSTNAME#", value.firstname)
    .replace("#LASTNAME#", value.lastname)
    .replace("#EMAIL#", value.email)
    .replace("#PASSWORD#", value.password)
    .replace("#ROLE#", value.role);
  addInner("tableStaff", staff);
}

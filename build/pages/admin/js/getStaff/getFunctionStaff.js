import { addInner } from "https://jscroot.github.io/element/croot.js";
export const URLGetStaff =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_staff";

export const tableStaff = `
<tr>
<td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <p class="mb-0 text-xs font-semibold leading-tight">#NAMALENGKAP#</p>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#JABATAN#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#JENISKELAMIN#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#EMAIL#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#PASSWORD#</span>
</td>
</tr>
`;

export function responseData(results) {
  console.log(results);
  results.forEach(isiRow);
}

export function isiRow(value) {
  const staff = tableStaff
    .replace("#NAMALENGKAP#", value.namalengkap)
    .replace("#JABATAN#", value.jabatan)
    .replace("#JENISKELAMIN#", value.jeniskelamin)
    .replace("#EMAIL#", value.email)
    .replace("#PASSWORD#", value.password);
  addInner("tableStaff", staff);
}

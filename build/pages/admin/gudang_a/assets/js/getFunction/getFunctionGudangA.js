import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetGudangA =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudanga";

export const tableGudangA = `
<tr>
<td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <div class="flex px-2 py-1">
    <div>
      <img src="../../assets/img/adidas.JPG" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user1" />
    </div>
    <div class="flex flex-col justify-center">
      <h6 class="mb-0 text-sm leading-normal">#NAME#</h6>
      <p class="mb-0 text-xs leading-tight text-slate-400">#CATEGORY#</p>
    </div>
  </div>
</td>
<td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <p class="mb-0 text-xs font-semibold leading-tight">#QTY#</p>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#SKU#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#SELLINGPRICE#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#ORIGINALPRICE#</span>
</td>
<td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">#AVAILABILITY#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#COLOR#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#BREADCRUMBS#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#DATE#</span>
</td>
<td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400">#EDIT#</a>
  <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400">#DELETE#</a>
</td>
</tr>
`;

export function responseData(results) {
  console.log(results);
  results.forEach(isiRow);
}

export function isiRow(value) {
  const gudanga = tableGudangA
    .replace("#NAMA#", value.gudanga.nama)
    .replace("#CATEGORY#", value.gudanga.category)
    .replace("#QTY#", value.gudanga.qty)
    .replace("#SKU#", value.gudanga.sku)
    .replace("#SELLINGPRICE#", value.gudanga.sellingprice)
    .replace("#ORIGINALPRICE#", value.gudanga.originalprice)
    .replace("#AVAILABILITY#", value.gudanga.availability)
    .replace("#COLOR#", value.gudanga.color)
    .replace("#BREADCRUMBS#", value.gudanga.breadcrumbs)
    .replace("#DATE#", value.gudanga.date)
    .replace("#EDIT#", value._id)
    .replace("#DELETE#", value._id);
  addInner("tableGudangA", gudanga);
}
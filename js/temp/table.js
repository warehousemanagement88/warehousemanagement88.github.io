export let isiTabel = `
<tbody
                    class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
<tr class="h-18 text-gray-700 dark:text-gray-400">
    <th class="whitespace-nowrap px-4 text-left">
        <div class="flex items-left -m-2">
            <div class="w-auto p-2">
                <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
                <p class="text-xs font-medium text-coolGray-500">#NOHP#</p>
            </div>
        </div>
    </th>
    <th class="whitespace-nowrap px-4 text-sm font-medium text-coolGray-800 text-left">#JURUSAN#</th>
    <th class="whitespace-nowrap px-4 text-sm font-medium text-coolGray-800 text-left">#NAMAWALDOS#</th>
    <th class="whitespace-nowrap px-4 text-sm font-medium text-coolGray-800 text-left">#JABATAN#</th>
    <th class="whitespace-nowrap px-4 text-sm font-medium text-coolGray-500 text-left">#TANGGAL#</th>
    <th class="whitespace-nowrap px-4 text-sm font-medium text-#col#-500 text-left">#HARI#</th>
    <th class="whitespace-nowrap px-4 text-sm font-medium text-#col#-500 text-left">#JAM#</th>
    <th class="whitespace-nowrap px-4 text-sm font-medium text-#col#-500 text-left">#LOKASIRUANGAN#</th>
    <th class="whitespace-nowrap pr-4 text-sm font-medium text-coolGray-800">
<a type="button" href="detail_perwalian.html?perwalianId=#IDDETAIL#"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
</a>
<a type="button" href="edit.html?perwalianId=#IDEDIT#"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
</a>
<button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
</button>
</th>
</tr>
<tbody>
`;
export let isiTabelMahasiswa = `
<tbody
                    class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
                  <tr class="h-18 text-gray-700 dark:text-gray-400">
    <th class="whitespace-nowrap px-4 text-left">
        <div class="flex items-left -m-2">
            <div class="w-auto p-2">
                <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
            </div>
        </div>
    </th>
    <th class="whitespace-nowrap px-4 text-sm font-medium text-coolGray-800 text-left">#NOHP#</th>
    <th class="whitespace-nowrap px-4 text-sm font-medium text-coolGray-800 text-left">#JURUSAN#</th>
    <th class="whitespace-nowrap px-4 text-left">
    <a type="button" href="edit_mahasiswa.html?mahasiswaId=#IDEDIT#"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
</a>
|
<button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
</button>
    </th>
</tr>
</tbody>
`;
export let isiTabelDosen = `
<tbody
                    class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
                  <tr class="h-18 text-gray-700 dark:text-gray-400">
    <th class="whitespace-nowrap px-4 text-left">
        <div class="flex items-left -m-2">
            <div class="w-auto p-2">
                <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
            </div>
        </div>
    </th>
    <th class="whitespace-nowrap px-4 text-sm font-medium text-#col#-500 text-left">#JABATAN#</th>
    <th class="whitespace-nowrap px-4 text-left">
    <a type="button" href="edit_dosen.html?dosenId=#IDEDIT#"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
</a>
|
<button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
</button>
    </th>
</tr>
</tbody>
`;
export let isiTabelRuangan = `
<tbody
                    class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
                  <tr class="h-18 text-gray-700 dark:text-gray-400">
    <th class="whitespace-nowrap px-4 text-left"> 
    <div class="flex items-left -m-2">
    <div class="w-auto p-2">
        <p class="text-xs font-semibold text-coolGray-800">#LOKASIRUANGAN#</p>
    </div>
</div>
    </th>
    <th class="whitespace-nowrap px-4 text-left">
    <a type="button" href="edit_ruangan.html?ruanganId=#IDEDIT#"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
</a>
|
<button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
</button>
    </th>
</tr>
</tbody>
`;

export let isiTabelLocation = `
<tr class="h-18">
    <th class="whitespace-nowrap px-4 bg-white text-left">
        <div class="flex items-center -m-2">
            <div class="w-auto p-2">
                <p class="text-xs font-semibold text-coolGray-800">#NAMALOKASI#</p>
            </div>
        </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#ALAMAT#</th>
    <th class="whitespace-nowrap px-4 bg-white text-left">
    </th>
</tr>
`;
export let isiTabelWaktu = `
<tr class="h-18">
    <th class="whitespace-nowrap px-4 bg-white text-left">
        <div class="flex items-center -m-2">
            <div class="w-auto p-2">
                <p class="text-xs font-semibold text-coolGray-800">#JAM#</p>
            </div>
        </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#HARI#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">#TANGGAL#</th>
    <th class="whitespace-nowrap px-4 bg-white text-left">
    </th>
</tr>
`;

export const dataGridCommonProps = {
    disableSelectionOnClick: false,
    disableColumnMenu: true,
    disableVirtualization: true,
    scrollable: true,
    hideFooterSelectedRowCount: true, 
    disableColumnResize: false,
    scrollHeight: "flex",
    responsiveLayout: "scroll",
    // paginationMode: "server",
    slotProps: {
        loadingOverlay: {
            variant: 'skeleton',
            noRowsVariant: 'skeleton',
        },
    },
    // getRowHeight: () => 'auto'
}


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, BoxProps, styled, Typography } from "@mui/material";
import {
  CardSpinner,
  CustomPagination,
  EmptyMessage,
  CUSTOM_PAGINATION_PROPS,
} from "src/components";

const TableComponentContainer = styled(Box)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  position: relative;
  //   height: fit-content;
  height: calc(100vh - ${theme.header.height});
  padding: 20px;
  padding-top: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
);

const StyledTableContainer = styled((props: any) => (
  <TableContainer {...props} component={Paper}>
    {props.children}
  </TableContainer>
))`
  box-sizing: border-box;
  width: calc(100% - 40px);
  height: fit-content;
  max-height: 100%;
  overflow: overlay;
`;

const StyledTableHeader = styled(Box)`
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  box-sizing: border-box;
  z-index: 1;
`;

const StyledPaginationContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

// const StyledTableCell = styled(TableCell)(
//   ({ theme }) => `
//     color: unset;
//     // background-color: ${theme}
// `
// );

export interface FIXED_HEADER_TABLE_PROPS {
  columns: { Header: string; accessor: string }[];
  data: object[];
  title?: string;
  actions?: React.ReactNode;
  loading?: boolean;
  emptyMessage?: string;
  paginationProps?: CUSTOM_PAGINATION_PROPS;
  paginationContainerProps?: BoxProps;
}

export function FixedHeaderTable(props: FIXED_HEADER_TABLE_PROPS) {
  const {
    columns,
    data,
    title,
    actions,
    loading,
    emptyMessage,
    paginationContainerProps,
    paginationProps,
  } = props;

  return (
    <TableComponentContainer>
      <StyledTableHeader>
        <Typography variant="h1">{title}</Typography>
        {actions}
      </StyledTableHeader>
      <StyledTableContainer className="custom-scrollbar">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((cell, index) => (
                <TableCell key={index}>{cell.Header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {!loading && data.length > 0 ? (
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((cell, ind) => (
                    <TableCell key={ind} component="th" scope="row">
                      {row[cell.accessor]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
        {loading ? (
          <CardSpinner withContainer={false} />
        ) : data.length === 0 ? (
          <EmptyMessage variant="h4">
            {emptyMessage || "No data found"}
          </EmptyMessage>
        ) : null}
      </StyledTableContainer>
      <StyledPaginationContainer {...paginationContainerProps}>
        <CustomPagination numberPagination={false} {...paginationProps} />
      </StyledPaginationContainer>
    </TableComponentContainer>
  );
}

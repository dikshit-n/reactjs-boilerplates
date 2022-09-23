import PaginationItem from "@mui/material/PaginationItem";
import Pagination, { PaginationProps } from "@mui/material/Pagination";
import { getSearchString, removeSlashAtLast } from "src/utils";
import { CustomLink, CustomButton } from "src/components";
import { StackProps, Stack, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getSearchQuery } from "src/utils";

// custom-pagination

interface CUSTOM_PROPERTIES {
  to?: string;
  page?: string | number;
  pageAccessor?: string;
  stickToBottom?: boolean;
  hasMore?: boolean;
  count?: number;
  numberPagination?: boolean;
}

interface PROPS_1 extends CUSTOM_PROPERTIES, Omit<PaginationProps, "page"> {}
interface PROPS_2 extends CUSTOM_PROPERTIES, StackProps {}

export type CUSTOM_PAGINATION_PROPS<numberPagination = boolean> =
  numberPagination extends true ? PROPS_1 : PROPS_2;

// console.log(
//   getSearchQuery(
//     "domain=dashboard.stripe.com&page=%2Ftest%2Fcustomers&referrer=&cid=76c7a69f-f06c-4442-86e4-cb650b828f05&lsid=322d5795-3a05-4fd2-816c-e452c0b967f4&viewport_height=731&viewport_width=895&analytics_ua=analytics.js-CURRENT_VERSION&flags=%7B%22locale_de-DE%22%3Atrue%2C%22locale_en-AU%22%3Atrue%2C%22locale_en-CA%22%3Atrue%2C%22locale_en-GB%22%3Atrue%2C%22locale_en-IE%22%3Atrue%2C%22locale_en-IN%22%3Atrue%2C%22locale_en-NZ%22%3Atrue%2C%22locale_en-SG%22%3Atrue%2C%22locale_es-ES%22%3Atrue%2C%22locale_es-419%22%3Atrue%2C%22locale_fr-FR%22%3Atrue%2C%22locale_fr-CA%22%3Atrue%2C%22locale_id-ID%22%3Atrue%2C%22locale_it-IT%22%3Atrue%2C%22locale_ja-JP%22%3Atrue%2C%22locale_nl-NL%22%3Atrue%2C%22locale_pt-BR%22%3Atrue%2C%22locale_sv-SE%22%3Atrue%2C%22locale_th-TH%22%3Atrue%2C%22locale_zh-Hans%22%3Atrue%2C%22dashboard_home_sample_charts_disabled%22%3Afalse%2C%22dispute_evidence_submission_form_default_file_upload_to_other%22%3Afalse%2C%22customer_details_migration_to_hooks%22%3Atrue%2C%22enable_dashboard_support_access%22%3Afalse%2C%22analytics_id_holdback%22%3Afalse%2C%22merchant_token_holdback%22%3Afalse%2C%22account_app_2fa_non_us_and_canada%22%3Atrue%2C%22account_app_2fa_mandate%22%3Atrue%2C%22account_app_2fa_mandate_international%22%3Atrue%2C%22account_app_connect_2fa_mandate%22%3Atrue%2C%22account_app_connect_2fa_mandate_international%22%3Atrue%2C%22dashboard_account_app_v2%22%3Afalse%2C%22dashboard_onboarding_collaboration%22%3Afalse%7D&arb_id=fd4ae9c7-6518-47af-9a1d-cd52d80eb343&exp_page_load_id=08bf0c13-9245-459c-8f78-912ed5ff6cb2&revision=01867dd8df53b0a4075aa6f54ea11827de3f9ba1&dashboard_user_role=urole_admin&stripe_locale=en-US&page_name=%2Ftest%2Fcustomers&page_load_id=6n2sdhi4i4&header_locale=en-US%2Cen%3Bq%3D0.9&user_set_locale=auto&livemode=false&analytics_name=null&analytics_key_action_name=null&additional_analytics=%7B%7D&auto_track=true&dom_id=null&pos=555x284&containers=%5B%5D&action_name=button_click&event=button_click_autoaction&event_count=124&page_view_id=e2285b72-469c-437a-9bf6-f8875c294df0&event_id=e2285b72-469c-437a-9bf6-f8875c294df0_124&merchant_id=acct_1LIoIXSCNskmclZQ&user_id=usr_M0pyQeszXjTxAF"
//   )
// );

export const CustomPagination: React.FC<CUSTOM_PAGINATION_PROPS> = (props) => {
  const theme = useTheme();
  const { pathname, search } = useLocation();
  const query = getSearchQuery(search);
  const {
    to = pathname,
    page,
    count,
    pageAccessor = "page",
    stickToBottom = true,
    numberPagination = true,
    hasMore,
    ...rest
  } = props;
  let renderPage = parseInt(`${page || 0}`);

  if (!renderPage)
    renderPage = parseInt(`${query ? query[pageAccessor] : 0}`) || 1;

  const getDestinationHref = (pageNumber) => {
    const searchString = getSearchString({
      ...query,
      [pageAccessor]: pageNumber === 1 ? undefined : pageNumber,
    });
    return `${to}${searchString}`;
  };

  const stickToBottomStyle: any = {
    position: "sticky",
    bottom: 0,
    width: "100%",
    backgroundColor: theme.palette.background.default,
  };

  const sx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 0",
    ...(stickToBottom ? { ...rest.sx, ...stickToBottomStyle } : { ...rest.sx }),
  };

  console.log(query);

  const previousPageLink = `${removeSlashAtLast(pathname)}${getSearchString({
    ...query,
    page: renderPage - 1,
  })}`;
  const nextPageLink = `${removeSlashAtLast(pathname)}${getSearchString({
    ...query,
    page: renderPage + 1,
  })}`;

  return !!renderPage && numberPagination ? (
    count > 1 && (
      <Pagination
        count={count}
        page={renderPage}
        renderItem={(item) => (
          <PaginationItem
            to={getDestinationHref(item.page)}
            component={CustomLink}
            {...item}
          />
        )}
        {...rest}
        color={rest.color as PaginationProps["color"]}
        sx={sx}
      />
    )
  ) : (
    <Stack direction="row" sx={{ gap: "10px" }}>
      <CustomButton href={previousPageLink} disabled={renderPage === 1}>
        Previous
      </CustomButton>
      <CustomButton href={nextPageLink} disabled={!hasMore}>
        Next
      </CustomButton>
    </Stack>
  );
};

import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { useUniqueKey } from "src/hooks";

// async-div-spinner
export interface CARD_SPINNER_PROPS {
  count?: number;
  withContainer?: boolean;
  containerProps?: BoxProps;
}

const StyledCardSpinnerWrapper = styled(Box)`
  padding: 10px;
`;

export const CardSpinner: React.FC<CARD_SPINNER_PROPS> = (props) => {
  const { count = 1, withContainer = true, containerProps } = props;
  const uniqueKeys = useUniqueKey(count);

  const Container = withContainer
    ? (props: BoxProps) => (
        <StyledCardSpinnerWrapper {...props} {...containerProps}>
          {props.children}
        </StyledCardSpinnerWrapper>
      )
    : (props) => <>{props.children}</>;

  return (
    <Container>
      {new Array(count).map((_, index) => (
        <div
          key={uniqueKeys[index]}
          className="d-flex flex-column"
          style={{ padding: 10 }}
        >
          <div
            style={{ width: "50%", minWidth: 50, height: 20, borderRadius: 20 }}
            className="skeleton-box"
          />
          <div
            style={{ width: "80%", height: 20, borderRadius: 20 }}
            className="skeleton-box mt-3"
          />
          <div
            style={{ width: "100%", height: 20, borderRadius: 20 }}
            className="skeleton-box mt-3"
          />
          <div
            style={{ width: "70%", height: 20, borderRadius: 20 }}
            className="skeleton-box mt-3"
          />
        </div>
      ))}
    </Container>
  );
};

import { Card, Divider, styled, Tooltip, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { CustomButton, CustomIconButton, CustomPopover } from "src/components";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const StyledActionsWrapper = styled(Stack)``;

const ProfilePopoverWrapper = styled(Card)`
  min-width: 200px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const Actions = () => {
  return (
    <StyledActionsWrapper direction="row">
      <Tooltip title="Settings">
        <span>
          <CustomIconButton href="/admin/settings">
            <SettingsIcon />
          </CustomIconButton>
        </span>
      </Tooltip>
      <CustomPopover
        trigger={{
          component: (
            <Tooltip title="Profile">
              <span>
                <CustomIconButton>
                  <PersonIcon />
                </CustomIconButton>
              </span>
            </Tooltip>
          ),
        }}
      >
        <ProfilePopoverWrapper elevation={2}>
          <div>
            <Typography variant="h4">Name</Typography>
            <Typography variant="caption">Role</Typography>
          </div>
          <Divider />
          <CustomButton href="/admin/profile">Profile</CustomButton>
          <CustomButton color="error">Signout</CustomButton>
        </ProfilePopoverWrapper>
      </CustomPopover>
    </StyledActionsWrapper>
  );
};

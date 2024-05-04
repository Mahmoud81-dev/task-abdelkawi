import {
  Box,
  ButtonBase,
  CircularProgress,
  Grid,
  Typography,
  Modal,
} from "@mui/material";
import { useGetUsersQuery } from "../api/usersApi";
import UserCard from "../components/UserCard/UserCard";
import { User } from "../Interfaces/User";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import UserForm from "../components/UserForm/UserForm";

const Users = () => {
  const { data, isLoading } = useGetUsersQuery("");
  const [userEdit, setUserEdit] = useState<User | null>(null);
  const [openModal, setOpenModal] = useState(false);

  // methods
  const handleCloseModal = () => {
    setOpenModal(false);
    setUserEdit(null);
  };
  return (
    <Box my={2}>
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {/* add products */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ButtonBase
          onClick={() => setOpenModal(true)}
          sx={{
            my: 2,
            padding: "10px 10px",
            marginBottom: "1rem",
            borderRadius: "10px",
            border: "1px solid #ccc",
            backgroundColor: "#D20943",
            color: "white",
            fontWeight: "600",
            fontSize: "15px",
            textTransform: "capitalize",
          }}
        >
          <Add />
          <Typography>Add User</Typography>
        </ButtonBase>
      </Box>

      {data && data?.length > 0 && (
        <Grid container spacing={2}>
          {data?.map((user: User) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
              <UserCard user={user} setUserEdit={setUserEdit} setOpenModal={setOpenModal} />
            </Grid>
          ))}
        </Grid>
      )}

      {data && data?.length === 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Not found User
        </Box>
      )}

      {/* Modal for add or edit user */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UserForm userEdit={userEdit} handleCloseModal={handleCloseModal}/>
      </Modal>
    </Box>
  );
};

export default Users;

<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col sm="12" md="6">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Email" required></v-text-field>
              <v-text-field
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary">Masuk</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped></style>

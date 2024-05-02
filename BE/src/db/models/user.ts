import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";
import { hashPassword } from "../../helpers/bcrypt";

interface UserAttributes {
  id?: number;
  username: string | null;
  email: string | null;
  password: string | null;

  createdAt?: Date;
  updatedAt?: Date;
}

type UserModel = Model<UserAttributes> & UserAttributes;

export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id?: number;
  public username!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await hashPassword(user.password);
      },
      beforeUpdate: async (user) => {
        user.password = await hashPassword(user.password);
      },
    },
    timestamps: true,
    sequelize: connection,
    underscored: false,
  }
);

export default User;

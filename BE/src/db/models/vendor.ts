import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface VendorAttributes {
  id?: number;
  name: string | null;
  address: string | null;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface VendorInput extends Optional<VendorAttributes, "id"> {}
export interface VendorOutput extends Required<VendorAttributes> {}

class Vendor extends Model<VendorAttributes, VendorInput> implements VendorAttributes {
  public id?: number;
  public name!: string;
  public address!: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

Vendor.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    address: {
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
    timestamps: true,
    sequelize: connection,
    underscored: false,
  }
);

export default Vendor;

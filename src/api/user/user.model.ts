import { Schema, model, Document, DocumentDefinition, ObjectId } from "mongoose";
import { UserProfileType } from "./user.types";
import bcrypt from "bcryptjs";

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string; // hash -> SH256
  role: 'USER' | 'ADMIN' | 'GUEST';
  isActive: boolean;
  sharedRoster: string;
  guests: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt: Date;
  updateAt?: Date;

  fullName: string;
  profile: UserProfileType;
  comparePassword: (password: string) => Promise<boolean>;
};

const UserSchema = new Schema({
  sharedRoster: {
    type: Schema.Types.Array
  },
  guests: {
    type: Schema.Types.Array
  },
  firstName: {
    type: String,
    required: [true, 'Please provide a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please provide a last name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN', 'GUEST'],
    default: 'USER',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
  versionKey: false,
});

async function save(this: UserDocument, next: Function) { // (1)
  const user = this as UserDocument;

  try {
    if (!user.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error: any) {
    next(error);
  }
};

// Middlewares
UserSchema.pre('save', save); //(2)
UserSchema.pre('update', save);

// Virtuals
UserSchema.virtual('fullName').get(function fullName(this: UserDocument) {
  const { firstName, lastName } = this;
  return `${firstName} ${lastName}`;
});

UserSchema.virtual('profile').get(function profile(this: UserDocument) {
  const { id, firstName, lastName, email, role, createdAt, isActive, sharedRoster } = this;
  return {
    id,
    firstName,
    lastName,
    email,
    role,
    createdAt,
    isActive,
    sharedRoster
  };
});

// Methods
async function comparePassword(this: UserDocument, candidatePassword: string, next: Function) {
  const user = this;

  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password); // (3)
    return isMatch;
  } catch (error: any) {
    next(error);
    return false;
  }
};

UserSchema.methods.comparePassword = comparePassword; // (4)

const User = model<UserDocument>('User', UserSchema);

export default User;

// 1. Encript PASSWORD
// 2. Middleware mongoose -> .pre('save');
// 3. Compared PASSWORD witch HASH saved
// 4. Method mongoose -> comparePassword

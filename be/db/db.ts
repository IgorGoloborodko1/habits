import mongoose from 'mongoose';

export async function connect(dns: string) {
  mongoose.connect(dns, { useNewUrlParser: true, useUnifiedTopology: true });
}
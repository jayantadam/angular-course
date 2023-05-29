import { Request, Response } from "express";

export function login(req: Request, res: Response) {
  const requestData = req.body;

  let response: any;

  if (
    requestData.username == "cristiano" &&
    requestData.password == "ronaldo"
  ) {
    response = { response: { name: "christano ronaldo" } };
  } else {
    response = { response: { name: "login failed" } };
  }
  res.status(200).json(response);
}

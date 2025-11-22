const request = require("supertest");
const app = require("../app");

describe("Todo API", () => {
  test("GET /todos harus mengembalikan array kosong", async () => {
    const res = await request(app).get("/todos");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  test("POST /todos harus menambah todo", async () => {
    const res = await request(app)
      .post("/todos")
      .send({ task: "Belajar CI" });

    expect(res.statusCode).toBe(201);
    expect(res.body.task).toBe("Belajar CI");
  });

  // Simpan ID todo untuk update & delete
  let todoId;

  test("POST lagi untuk membuat todo yang akan diupdate", async () => {
    const res = await request(app)
      .post("/todos")
      .send({ task: "Data lama" });

    todoId = res.body.id; // simpan ID todo
    expect(res.statusCode).toBe(201);
  });

  test("PUT /todos/:id harus mengupdate todo", async () => {
    const res = await request(app)
      .put(`/todos/${todoId}`)
      .send({ task: "Data baru" });

    expect(res.statusCode).toBe(200);
    expect(res.body.task).toBe("Data baru");
  });

  test("DELETE /todos/:id harus menghapus todo", async () => {
    const res = await request(app).delete(`/todos/${todoId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(todoId);
  });
});

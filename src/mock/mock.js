import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Mock from "mockjs";
import { Todos } from "./data/todoList";

export default {
  // mock start
  start() {
    // 创建MockAdapter实例
    let mock = new MockAdapter(axios);
    // 获取todo列表
    mock.onGet("/todo/list").reply(config => {
      let mockTodo = Todos.map(todo => {
        return {
          id: todo.id,
          title: todo.title,
          count: todo.record.filter(data => {
            if (data.checked === false) return true;
            return false;
          }).length,
          locked: todo.locked,
          isDelete: todo.isDelete
        };
      }).filter(todo => {
        if (todo.isDelete === true) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            200,
            {
              todos: mockTodo
            }
          ]);
        }, 200);
      });
    });
    // 新增todo
    mock.onPost("/todo/addTodo").reply(config => {
      Todos.push({
        id: Mock.Random.guid(),
        title: "newList",
        isDelete: false,
        locked: false,
        record: []
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200]);
        }, 200);
      });
    });
  }
};

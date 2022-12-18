import {TodoApp} from "../components/appModule/ToDoApp";

export const AppModule = () => {
	return (
		<div className={"flex flex-col justify-center items-center w-full overflow-hidden bg-white app"} style={{height: 'calc(100vh - calc(50px + 6vh))'}}>
			<div className={"flex flex-col justify-between items-center container w-full h-full p-16 bg-fafafa app__container"}>

				<TodoApp/>
			</div>
		</div>
	)
}
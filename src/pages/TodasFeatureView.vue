<script setup>
import ChildComponent from '@/components/ChildComponent.vue';
import { computed, onMounted, ref, watch } from 'vue';

const count = ref(0)

const text = ref('')
const textVModel = ref();

function onInput(e){
    text.value = e.target.value
}

let awesome = ref(true)


function toggle(){
    awesome.value = !awesome.value
}

let id = 0

const newTodo = ref('')

const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo() {
  todos.value.push({id: id++, text: newTodo.value})
  newTodo.value = ''
}

function removeTodo(todo) {
    todos.value.splice(id--, 1)
}

let id2 = 0
const newTodo2 = ref('')
const hideCompleted = ref(false)
const todos2 = ref([
  { id: id2++, text: 'Learn HTML', done: true },
  { id: id2++, text: 'Learn JavaScript', done: true },
  { id: id2++, text: 'Learn Vue', done: false }
])

const filteredTodos = computed(()=>{
    return hideCompleted.value ? todos2.value.filter(todo => !todo.done) : todos2.value
})

function addTodo2() {
  todos2.value.push({ id: id2++, text: newTodo2.value, done: false })
  newTodo2.value = ''
}

function removeTodo2(todo) {
  todos2.value = todos2.value.filter((t) => t !== todo)
}


const pElementRef = ref(null)

onMounted(()=>{
    pElementRef.value.textContent = "Carregando o Texto depois do elemento estar pronto"
})


const todoId = ref(1)
const todoData = ref(null)
async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}
fetchData()
watch(todoId, fetchData)


const childMsg = ref('Não existe mensagem do componente filho')

</script>

<template>
    <BasicPageComponent title="Todas as Mecânicas">
        <template #explicacao >
            <ul>
                <li>Event Listeners</li>
                <li>Form Bindings</li>
                <li>Conditional Rendering</li>
            </ul>
        </template>

        <template #prototipo>
            <div class="flex flex-col gap-6">
                <div>
                    <h2>Event Listeners</h2>
                    <button class="px-6 py-2 border rounded-full bg-slate-300" @click="count++"> clieque: {{ count }}</button>
                </div>

                <div>
                    <h2>Form Binding</h2>
                    <input :value="text" @input="onInput" placeholder="Digite aqui">
                    <p>{{ text }}</p>
                </div>

                <div>
                    <h2>Form Binding - Utlizando v-Model</h2>
                    <input v-model="textVModel" placeholder="Digite aqui">
                    <p>{{ textVModel }}</p>
                </div>

                <div>
                    <h2>Conditional Rendering</h2>
                    <button class="px-6 py-2 border rounded-full bg-slate-300" @click="toggle">Alternar</button>
                    <h1 v-if="awesome">Opa !!</h1>
                    <h1 v-else>E ai 😢</h1>
                </div>

                <div class="flex flex-col gap-4 ">
                    <h2>List Rendering </h2>
                    <form @submit.prevent="addTodo" class="flex gap-4">
                        <input class="p-2 border rounded-lg" v-model="newTodo" required placeholder="new todo">
                        <button>Add Todo</button>
                    </form>
                    <ul>
                        <li v-for="todo in todos" :key="todo.id" class="flex justify-between gap-4 p-2">
                            {{ todo.text }}
                            <button class="px-2 py-1 border rounded-lg bg-slate-200" @click="removeTodo(todo)">X</button>
                        </li>
                    </ul>
                </div>

                <div class="flex flex-col gap-4 ">
                    <h2>Computed Property</h2>
                    <form @submit.prevent="addTodo2" class="flex gap-4">
                        <input class="p-2 border rounded-lg" v-model="newTodo2" required placeholder="new todo">
                        <button>Add Todo</button>
                    </form>
                    <ul>
                        <li v-for="todo in filteredTodos" :key="todo.id" class="flex justify-between gap-4 p-2">
                            <input type="checkbox" v-model="todo.done">
                            <span :class="{ done: todo.done }">{{ todo.text }}</span>
                            <button class="px-2 py-1 border rounded-lg bg-slate-200" @click="removeTodo2(todo)">X</button>
                        </li>
                    </ul>
                    <div>
                        <button class="px-2 py-1 border rounded-lg bg-slate-200" @click="hideCompleted = !hideCompleted">
                            {{ hideCompleted ? 'Mostrar todos' : 'Esconder Completados' }}
                        </button>
                    </div>
                </div>

                <div class="flex flex-col gap-4 ">
                    <h2>Lifecycle and Template Refs</h2>
                    <p ref="pElementRef"> Ola mundo</p>
                </div>

                <div class="flex flex-col gap-4 ">
                    <h2>Watchers</h2>
                    <p>Todo id: {{ todoId }}</p>
                    <button class="px-2 py-1 border rounded-lg bg-slate-200" @click="todoId++" :disabled="!todoData">Próxima tarefa</button>
                    <p v-if="!todoData">Loading...</p>
                    <pre v-else>{{ todoData }}</pre>
                </div>

                <div class="flex flex-col gap-4 ">
                    <ChildComponent @response="(msg) => childMsg = msg" />
                    <p>{{ childMsg }}</p>
                </div>


            </div>
        </template>
    </BasicPageComponent>
</template>


<style scoped>

.title{
    color: red;
}
.done {
  text-decoration: line-through;
}
</style>
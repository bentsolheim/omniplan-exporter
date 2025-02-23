package com.example.demo

import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

data class Task(
    val name: String,
    val start: String,
    val end: String,
    val customData: Map<String, Any>,
    val resourceAllocations: List<ResourceAllocation>? = null
)

data class ResourceAllocation(val resourceName: String, val percentage: Double)

@RestController
@RequestMapping("/tasks")
class TaskController {

    @PostMapping
//    fun createTask(@RequestBody payload: List<Task>): String {
    fun createTask(@RequestBody payload: String): String {
//        payload.forEach {
//            println(it)
//        }
        val objectMapper = ObjectMapper()
        val prettyPayload = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(objectMapper.readTree(payload))
        println(prettyPayload)
        return "Task created"
    }
}
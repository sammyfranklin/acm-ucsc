module.exports = {
    getEvents : function(callback){
        $.ajax({
            method : "GET",
            url : "/events",
            dataType : "json",
            success : callback,
            error : console.error
        });
    },
    postEvent : function(data, callback){
        $.ajax({
            method : "POST",
            url : "/events",
            data : data,
            contentType : false,
            processData : false,
            dataType : "json",
            success : callback,
            error : console.error
        });
    },
    deleteEvent : function(id, callback){
        $.ajax({
            method : "DELETE",
            url : "/events/"+id,
            dataType : "json",
            success : callback,
            error : console.error
        });
    }
};
jQuery(function($)
{
    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': '32cDpsNvlKe7XpCG6zwUsw',
                'message': {
                    'from_email': 'support@parraoke.com',
                    'from_name': 'Parraoke Support',
                    'headers': {
                        'Reply-To': 'support@parraoke.com'
                    },
                    'subject': 'Download Parraoke - your easiest way to Chinese Language !',
                    'text': 'Download & Have fun with Parraoke Student @ http://ad.apps.fm/acUk3E0-CIH-5_ZIZX7rw_E7og6fuV2oOMeOQdRqrE1GSY6vHQ22VxEhp4MsjFcDsMGFQqhPMbbN8GEQRY8DQYnaW1f3uqnDWCfWFP3WnYM',
                    'to': [
                    {
                        'email': email,
                        'name': name,
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            //alert('Your Parraoke Download URL has been emailed to you. Thank you!'); // show success message
            $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
            window.location.href = "http://ad.apps.fm/acUk3E0-CIH-5_ZIZX7rw_E7og6fuV2oOMeOQdRqrE1GSY6vHQ22VxEhp4MsjFcDsMGFQqhPMbbN8GEQRY8DQYnaW1f3uqnDWCfWFP3WnYM";
        })
        .fail(function(response) {
            alert('Error sending message.');
        });
        return false; // prevent page refresh
    });
});
// 

public with sharing class PortfolioDisbursal {
    public PortfolioDisbursal() {}

    @AuraEnabled
    public static String createContact(String lastName, String email, String description,String PhoneNumber,String result) {
    
        try {
            Contact newContact = new Contact();
            newContact.LastName = lastName;
            newContact.Phone = PhoneNumber;
            newContact.Email = email;
            newContact.Description = description;
            insert newContact;

            // Send an email to the recipient
            sendEmail(email,lastName,description);
            sendEmailToRecipient(email, lastName);

            return result='Success';
        } catch (Exception e) {
            System.debug('Error creating contact: ' + e.getMessage());
            throw new AuraHandledException('Failed to create contact: ' + e.getMessage());
        }
    }

    @AuraEnabled
    public static void sendEmail(String toAddress, String subject, String body) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new List<String>{ 'satyasriharim.edu2023@gmail.com' });
        mail.setSubject(subject + ' ' + toAddress);
        mail.setHtmlBody(body);
        Messaging.sendEmail(new List<Messaging.Email> { mail });   
    }

    @AuraEnabled
    public static void sendEmailToRecipient(String toAddress, String lastName) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new List<String>{ toAddress });
        mail.setSubject('Thank You for Contacting Me');
        
        String body = 'Dear ' + lastName + ',\n\n';
        body += 'Thank you for reaching out to me through my portfolio. I\'m grateful for your interest and excited about the possibility of working together. Let\'s discuss further details at your convenience.\n\n';
        body += 'Best regards,\n\n';
        body += 'Sri Hari Mavireddy\n\n';
        body += 'satyasriharim.edu2023@gmail.com';
        
        mail.setPlainTextBody(body);
        Messaging.sendEmail(new List<Messaging.Email> { mail });  
    }
}

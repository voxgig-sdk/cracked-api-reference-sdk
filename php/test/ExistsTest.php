<?php
declare(strict_types=1);

// CrackedApiReference SDK exists test

require_once __DIR__ . '/../crackedapireference_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CrackedApiReferenceSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
